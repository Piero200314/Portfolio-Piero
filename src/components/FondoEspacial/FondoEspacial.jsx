import { useEffect, useRef } from "react";
import "./FondoEspacial.css";

const vertexSource = `attribute vec2 position; void main(){gl_Position=vec4(position,0.0,1.0);}`;
const fragmentSource = `
precision highp float;
uniform vec2 resolution;
uniform vec2 pointer;
uniform float time;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=mat2(1.6,1.2,-1.2,1.6)*p+2.3;a*=.5;}return v;}
float stars(vec2 p,float scale,float seed){
  vec2 q=p*scale;vec2 cell=floor(q);vec2 local=fract(q)-.5;
  float r=hash(cell+seed);vec2 offset=vec2(hash(cell+2.7+seed),hash(cell+8.1+seed))-.5;
  float d=length(local-offset*.65);
  float size=mix(.012,.038,r);
  float spot=1.-smoothstep(0.,size,d);
  float halo=.0035/(d+.028);
  return step(.952,r)*(spot+halo*.17)*(.5+.5*sin(time*.28+r*6.28));
}
void main(){
 vec2 uv=(gl_FragCoord.xy-.5*resolution.xy)/resolution.y;
 uv+=pointer*.035;
 float t=time*.018;
 vec2 p=uv*2.4;
 vec2 warp=vec2(fbm(p+vec2(t,-t)),fbm(p+vec2(3.7,-t)));
 float cloud=fbm(p+warp*2.4+vec2(t*.3,0.));
 float veins=pow(max(0.,1.-abs(cloud-.52)*5.),3.);
 float density=smoothstep(.32,.79,cloud);
 float belt=exp(-pow((uv.y+.18*sin(uv.x*2.4)-.05)*2.6,2.));
 float edges=smoothstep(.08,.65,abs(uv.x));
 vec3 color=vec3(.025,.035,.058);
 color+=vec3(.018,.09,.29)*density*belt*1.05;
 color+=vec3(.014,.20,.30)*veins*belt*(.22+edges*.45);
 color+=vec3(.015,.045,.13)*exp(-length(uv-vec2(.35,.05))*2.8);
 float zoom=1.+mod(time*.012,1.)*.12;
 float s=stars(uv/zoom+vec2(t*.035,0.),25.,0.);
 s+=stars(uv/(zoom+.25)-vec2(t*.025,0.),43.,19.)*.45;
 s+=stars(uv/(zoom+.55),64.,37.)*.25;
 color+=vec3(.56,.78,1.)*s*.68;
 float center=1.-.24*exp(-length(uv)*4.);
 color*=center;
 color*=1.-smoothstep(.35,1.2,length(uv))*.45;
 gl_FragColor=vec4(color,1.);
}`;

export default function FondoEspacial({ paused }) {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      powerPreference: "low-power",
    });
    if (!gl) return; // El fondo CSS permanece visible si WebGL no está disponible.
    const resources = [];
    const makeShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      resources.push(shader);
      return shader;
    };
    const vertex = makeShader(gl.VERTEX_SHADER, vertexSource);
    const fragment = makeShader(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertex || !fragment) {
      resources.forEach((shader) => gl.deleteShader(shader));
      return;
    }
    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      resources.forEach((shader) => gl.deleteShader(shader));
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const attribute = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(attribute);
    gl.vertexAttribPointer(attribute, 2, gl.FLOAT, false, 0, 0);
    const uResolution = gl.getUniformLocation(program, "resolution");
    const uTime = gl.getUniformLocation(program, "time");
    const uPointer = gl.getUniformLocation(program, "pointer");
    let frame = 0,
      previous = 0,
      rendered = 0,
      visible = true,
      lost = false;
    const pointer = [0, 0];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const draw = () => {
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, timeRef.current);
      gl.uniform2f(uPointer, ...pointer);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    const resize = () => {
      const box = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        box.width < 700 ? 1 : 1.25,
      );
      canvas.width = Math.max(1, Math.round(box.width * dpr));
      canvas.height = Math.max(1, Math.round(box.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      draw();
    };
    const tick = (stamp) => {
      if (lost) return;
      const delta = previous ? Math.min((stamp - previous) / 1000, 0.08) : 0;
      previous = stamp;
      if (visible && !document.hidden && !paused && !reduced.matches) {
        timeRef.current += delta;
        if (stamp - rendered > 33) {
          draw();
          rendered = stamp;
        }
      }
      if (!paused && !reduced.matches) frame = requestAnimationFrame(tick);
    };
    const move = (event) => {
      if (paused || reduced.matches) return;
      const box = canvas.parentElement.getBoundingClientRect();
      pointer[0] = (event.clientX - box.left) / box.width - 0.5;
      pointer[1] = 0.5 - (event.clientY - box.top) / box.height;
    };
    const resetPointer = () => {
      pointer[0] = 0;
      pointer[1] = 0;
    };
    const contextLost = (event) => {
      event.preventDefault();
      lost = true;
      cancelAnimationFrame(frame);
      canvas.style.opacity = "0";
    };
    const motionChange = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      if (!paused && !reduced.matches) frame = requestAnimationFrame(tick);
      else draw();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement);
    const visibility = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
      },
      { threshold: 0 },
    );
    visibility.observe(canvas);
    const parent = canvas.parentElement.parentElement;
    parent.addEventListener("pointermove", move);
    parent.addEventListener("pointerleave", resetPointer);
    canvas.addEventListener("webglcontextlost", contextLost);
    reduced.addEventListener("change", motionChange);
    canvas.style.opacity = "1";
    resize();
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", resetPointer);
      canvas.removeEventListener("webglcontextlost", contextLost);
      reduced.removeEventListener("change", motionChange);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      resources.forEach((shader) => gl.deleteShader(shader));
    };
  }, [paused]);
  return (
    <div className="space-background" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
