import { useEffect, useState } from "react";

export default function ParkingDemo({ paused }) {
  const [slots, setSlots] = useState([false, false]);
  const [gate, setGate] = useState(null);
  const [message, setMessage] = useState("Dos plazas disponibles. Simula la llegada de un vehículo.");
  useEffect(() => {
    if (!gate || paused) return;
    const timer = setTimeout(() => {
      setSlots(gate.slots);
      setMessage(gate.direction === "in" ? "Sensor de plaza: vehículo estacionado. Barrera cerrada." : "Sensor de salida: vehículo retirado. Plaza disponible.");
      setGate(null);
    }, 1800);
    return () => clearTimeout(timer);
  }, [gate, paused]);
  const free = slots.filter(value => !value).length;
  function travel(direction) {
    const index = slots.findIndex(value => direction === "in" ? !value : value);
    if (index < 0) { setMessage(direction === "in" ? "Parqueo completo: el ingreso permanece cerrado." : "El parqueo está vacío: no hay vehículos para retirar."); return; }
    const next = [...slots]; next[index] = direction === "in";
    setGate({ direction, slots: next });
    setMessage(direction === "in" ? "Sensor de entrada detecta un vehículo. Se abre la barrera." : "Sensor de salida detecta un vehículo. Se abre la barrera.");
  }
  return <section className="parking-demo" aria-label="Demostración interactiva de ParkSense">
    <div className="parking-heading"><div><small>SIMULACIÓN VISUAL INTERACTIVA</small><h3>ParkSense / 02 plazas</h3></div><output className="parking-lcd">LIBRES: {free} / 2<br />{free ? "ACCESO DISPONIBLE" : "PARQUEO COMPLETO"}</output></div>
    <div className="parking-lot">
      <div className="parking-lanes"><div>ENTRADA <i className={`parking-barrier ${gate?.direction === "in" ? "open" : ""}`} /></div><div>SALIDA <i className={`parking-barrier ${gate?.direction === "out" ? "open" : ""}`} /></div></div>
      <div className="parking-slots">{slots.map((occupied, index) => <div key={index} className={`parking-slot ${occupied ? "occupied" : ""}`}><span>PLAZA 0{index + 1}</span><div className="parking-car" aria-hidden="true">{occupied ? <i className="car-body" /> : "P"}</div><strong>{occupied ? "● Ocupada" : "○ Libre"}</strong><small>Sensor ultrasónico {index + 1}</small></div>)}</div>
      {gate && <div className={`parking-moving-car ${gate.direction}`} aria-hidden="true"><i className="car-body" /></div>}
    </div>
    <p role="status" className="parking-message">{message}{paused && gate ? " · Animación pausada." : ""}</p>
    <div className="parking-actions"><button disabled={!!gate || paused} onClick={() => travel("in")}>Ingresar vehículo</button><button disabled={!!gate || paused} onClick={() => travel("out")}>Retirar vehículo</button><button onClick={() => { setGate(null); setSlots([false, false]); setMessage("Simulación reiniciada. Dos plazas libres."); }}>Reiniciar</button></div>
    <p className="parking-note">Representación explicativa de los sensores, las dos plazas, las barreras y el LCD. No ejecuta el firmware Arduino ni reproduce todavía sus umbrales, alarmas o apertura manual.</p>
  </section>;
}
