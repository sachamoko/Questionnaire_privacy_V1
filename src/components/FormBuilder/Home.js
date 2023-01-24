import React from 'react';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div >
      <h2 style={{display:'flex', justifyContent:'center', alignContent:'center', fontSize:"30px"}}>Faites votre choix </h2>
    <div style={{display: 'flex', flexDirection: 'row', height: '100vh', marginBottom:"30px"}}>
      <Button style={{width: '100%', background: '#9C27B0', color:'#F1F1F1', border:'none',cursor: 'pointer',borderRadius:"30px", fontSize:"40px"}} variant="primary">Créer un questionnaire</Button>
      <div style={{width:'200px'}}></div>
      <Button style={{width: '100%',background: '#9C27B0',color:'#F1F1F1',border:'none',cursor: 'pointer',borderRadius:"30px",fontSize:"40px"}} variant="secondary">Voir les questionnaires</Button>
    </div>
    </div>
  );
}

export default Home;