import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

export const WeaponsContainer = ({ weapons }) =>
  <div>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Weapon</th>
          <th>Damage</th>
          <th>Damage Type</th>
        </tr>
      </thead>
      <tbody>
        {weapons.map(weapon =>
        <tr>
          <td>{weapon.id}</td>
          <td>{weapon.name}</td>
          <td>{weapon.damage}</td>
          <td>{weapon.dmg_type}</td>
        </tr>
        )}
      </tbody>
    </Table>
  </div>;

const mapStateToProps = ({ weapons }) => ({
  weapons,
});


export default connect(mapStateToProps)(WeaponsContainer);

