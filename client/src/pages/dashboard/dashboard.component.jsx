import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import DashboardActions from '../../components/dashboard-actions/dashboard-actions.component';
import Experience from '../../components/experience/experience.component';
import Education from '../../components/education/education.component';
//import EditExperience from '../../pages/edit-experience/edit-experience.component';

import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../redux/profile/profile-actions';

import './dashboard.styles.scss';
import Spinner from '../../components/Spinner/Spinner.component';

const Dashboard = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading }}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  if(loading) return <Spinner />
  else
  return (
    <div className='dashboard'>
      <DashboardActions />
      <h1>Dashboard</h1>
      
      {profile !== null ? (
        <div>
          <div className='row justify-content-around'>
            
            <div className='col-lg-5 text-align'>
              <h4 className="mb-4">Experiências</h4>
                {
                  profile.experience
                    ? 
                      profile.experience.map( exp => (
                        <Experience key={exp._id} experience={exp} />
                      )) 
                    : 
                      <p>Você ainda não adicionou nenhuma experiência</p>
                }
            </div>

            <div className='col-lg-5'>
              <h4 className='mb-4'>Educação</h4>
              {
                profile.education
                  ?
                    profile.education.map( edu => (
                      <Education key={edu._id} education={edu} />
                    ))
                  :
                  <p>Você ainda não adicionou nenhuma educação</p>
              }
            </div>

          </div>

          <div className="my-2">
            <button className="btn btn-danger mt-5" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Deletar Conta
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>Você ainda não tem um perfil, crie um agora.</p>
          <Link to="/criar-perfil" className="btn btn-primary my-1">
            Criar Perfil
          </Link>
        </div>
      )}
    </div>
  );
};


const mapStateToProps = (state) => ({
  auth: state.user,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
