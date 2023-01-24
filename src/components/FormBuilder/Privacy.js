import React, { useState } from 'react';

const Privacy = () => {
  const [partners, setPartners] = useState(['Partenaire 1']);
  const [fields, setFields] = useState(['Finalité 1']);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('construction');

  const addPartner = () => {
    setPartners([...partners, `Partenaire ${partners.length + 1}`]);
  };

  const addField = () => {
    setFields([...fields, `Finalité ${fields.length + 1}`]);
  };

  const changeStep = newStep => {
    setStep(newStep);
  };

  const changeStatus = newStatus => {
    setStatus(newStatus);
  };

  return (
    <div>
        <h2 style={{display:'flex', justifyContent:'center', alignContent:'center'}}>Liste d'informations pour le questionnaire </h2>
    <div style={{display:'flex', background:'#9C27B0', margin:"30px", padding:"20px", borderRadius:"30px"}}>
      <div style={{padding:"20px"}}>
        <h3>Partenaires</h3>
        {partners.map((partner, index) => (
          <div key={index}>
            <textarea placeholder={partner} />
          </div>
        ))}
        <button style={{marginTop:"10px", backgroundColor:"black", color:"#F1F1F1"}} onClick={addPartner}>Ajouter un autre partenaire</button>
      </div>
      <div style={{padding:"20px"}}>
        <h3>Finalité</h3>
        {fields.map((field, index) => (
          <div key={index}>
            <textarea placeholder={field} />
          </div>
        ))}
        <button style={{marginTop:"10px", backgroundColor:"black", color:"#F1F1F1"}} onClick={addField}>Ajouter une autre finalité</button>
      </div>
      <div style={{padding:"20px"}}>
        <h3>Step</h3>
        <button style={{marginRight:"10px", backgroundColor:"black", color:"#F1F1F1"}} onClick={() => changeStep(1)}>1</button>
        <button style={{marginRight:"10px", backgroundColor:"black", color:"#F1F1F1"}} onClick={() => changeStep(2)}>2</button>
        <button  style={{marginRight:"10px",backgroundColor:"black", color:"#F1F1F1"}} onClick={() => changeStep(3)}>3</button>
      </div>
      <div style={{padding:"20px"}}>
        <h3>Statut</h3>
        <button style={{marginRight:"10px",backgroundColor:"black", color:"#F1F1F1"}}onClick={() => changeStatus('construction')}>Construction</button>
        <button style={{marginRight:"10px",backgroundColor:"black", color:"#F1F1F1"}} onClick={() => changeStatus('actif')}>Actif</button>
        <button style={{marginRight:"10px",backgroundColor:"black", color:"#F1F1F1"}} onClick={() => changeStatus('analyse')}>Analyse</button>
        <button style={{marginRight:"10px",backgroundColor:"black", color:"#F1F1F1"}} onClick={() => changeStatus('finalisé')}>Finalisé</button>
      </div>
    </div>
    </div>
  );
};

export default Privacy;
