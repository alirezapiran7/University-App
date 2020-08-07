import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../redux/profile/profile-actions';

import './experience.styles.scss';

const Experience = ({ experience, deleteExperience, displayButtons }) => {

  return (
    <div>
      <div className="experiences">
        <div className='row'>
          <div className='col-lg-6'>
            <h5>Empresa</h5>
            <p>{experience.company}</p>
          </div>
          <div className='col-lg-6'>
            <h5>Cargo</h5>
            <p>{experience.title}</p>
          </div>
          <div className='col-lg-6'>
            <h5>Localidade</h5>
            <p>{experience.location}</p>
          </div>
          <div className='col-lg-6'>
            <h5>Anos</h5>
            <p>{<Moment format="YYYY/MM/DD">{moment.utc(experience.from)}</Moment>} - {experience.current ? 'até hoje' : <Moment format="YYYY/MM/DD">{moment.utc(experience.to)}</Moment>}</p>
          </div>
          <div className='col-lg-12 mb-3'>
            <h5>Descrição</h5>
            {experience.description}
          </div>
          {displayButtons ? (
            <Fragment>
              <div className='col-lg-6'>
                <Link to={`/editar-experiencia/${experience._id}`} className='edit-button'>
                  <i className="far fa-edit mr-2"></i>
                  Editar
                </Link>
              </div>
              <div className='col-lg-6'>
                <button className='delete-button' onClick={() => deleteExperience(experience._id)}>
                  <i className="far fa-trash-alt mr-2"></i>
                  Excluir
                  </button>
              </div>
            </Fragment>) : null}
        </div>
      </div>
    </div>
  );
};

export default connect( null, { deleteExperience })(Experience);
