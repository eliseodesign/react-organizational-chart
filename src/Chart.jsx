import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

const OrganizationalChartComponent = () => {
  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'black'}
      lineBorderRadius={'10px'}
      label={
        <div className="node">
          <img src="https://via.placeholder.com/50" alt="profile" className="profile-img" />
          <h4 className="name">Director (CEO)</h4>
          <p className="position">CEO</p>
          <button className="btn">Ver Equipo</button>
          <button className="btn">Ver Perfil</button>
        </div>
      }
    >
      {/* Jefe conectado directamente al CEO */}
      <TreeNode
        label={
          <div className="node">
            <img src="https://via.placeholder.com/50" alt="profile" className="profile-img" />
            <h4 className="name">Jefe</h4>
            <p className="position">Manager</p>
            <button className="btn">Ver Equipo</button>
            <button className="btn">Ver Perfil</button>
          </div>
        }
      />

      {/* Secretaria conectada directamente al CEO */}
      <TreeNode
        label={
          <div className="node">
            <img src="https://via.placeholder.com/50" alt="profile" className="profile-img" />
            <h4 className="name">Secretaria</h4>
            <p className="position">Asistente</p>
            <button className="btn">Ver Equipo</button>
            <button className="btn">Ver Perfil</button>
          </div>
        }
      />

      {/* Subordinados conectados directamente al CEO */}
      <TreeNode
        label={
          <div className="node">
            <img src="https://via.placeholder.com/50" alt="profile" className="profile-img" />
            <h4 className="name">Subordinado 1</h4>
            <p className="position">Empleado</p>
            <button className="btn">Ver Equipo</button>
            <button className="btn">Ver Perfil</button>
          </div>
        }
      />
      <TreeNode
        label={
          <div className="node">
            <img src="https://via.placeholder.com/50" alt="profile" className="profile-img" />
            <h4 className="name">Subordinado 2</h4>
            <p className="position">Empleado</p>
            <button className="btn">Ver Equipo</button>
            <button className="btn">Ver Perfil</button>
          </div>
        }
      />
      <TreeNode
        label={
          <div className="node">
            <img src="https://via.placeholder.com/50" alt="profile" className="profile-img" />
            <h4 className="name">Subordinado 3</h4>
            <p className="position">Empleado</p>
            <button className="btn">Ver Equipo</button>
            <button className="btn">Ver Perfil</button>
          </div>
        }
      />
      <TreeNode
        label={
          <div className="node">
            <img src="https://via.placeholder.com/50" alt="profile" className="profile-img" />
            <h4 className="name">Subordinado 4</h4>
            <p className="position">Empleado</p>
            <button className="btn">Ver Equipo</button>
            <button className="btn">Ver Perfil</button>
          </div>
        }
      />
    </Tree>
  );
};

export default OrganizationalChartComponent;
