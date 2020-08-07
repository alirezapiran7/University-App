import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../redux/profile/profile-actions';

import './education.styles.scss';

const Education = ({ education, deleteEducation, displayButtons }) => {

  return (
    <div>
      <div className="edu">
        <div className='row'>
          <div className='col-lg-6'>
            <h5>Formação</h5>
            <p>{education.degree}</p>
          </div>
          <div className='col-lg-6'>
            <h5>Área de estudo</h5>
            <p>{education.fieldofstudy}</p>
          </div>
          <div className='col-lg-6'>
            <h5>Instituição</h5>
            <p>{education.school}</p>
          </div>
          <div className='col-lg-6'>
            <h5>Anos</h5>
            <p>{<Moment format="YYYY/MM/DD">{moment.utc(education.from)}</Moment>} - {education.current ? 'até hoje' : <Moment format="YYYY/MM/DD">{moment.utc(education.to)}</Moment>}</p>
          </div>
          <div className='col-lg-12 mb-3'>
            <h5>Descrição</h5>
            {education.description}
          </div>
          {displayButtons ? (
          <Fragment>
              <div className='col-lg-6'>
                <Link to={`/editar-educacao/${education._id}`} className='edit-button'>
                  <i className="far fa-edit mr-2"></i>
                  Editar
                </Link>
              </div>
              <div className='col-lg-6'>
                <button className='delete-button' onClick={() => deleteEducation(education._id)}>
                  <i className="far fa-trash-alt mr-2"></i>
                  Excluir
                  </button>
              </div>
            </Fragment>
            ) : null}
        </div>
      </div>
    </div>
  );
};


export default connect( null, { deleteEducation })(Education);
