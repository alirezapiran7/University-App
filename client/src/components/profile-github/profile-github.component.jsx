import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../redux/profile/profile-actions';

import './profile-github.styles.scss';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
    console.log(repos);
    useEffect(() => {
        getGithubRepos(username);
      }, [getGithubRepos, username]);

    return (
        <div className='profile-github'>
            <h3>Repositorios</h3>
            <div className='row'>
            {
                repos.map(repo => (
                    <div className='repo col-lg-5' key={repo.id}>
                        
                            <h4>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </h4>
                            <p>{repo.description ? <p>{repo.description}</p> : <p>{'Este repositório não tem uma descrição.'}</p>}</p>
                            <span className="stars">
                                Stars: {repo.stargazers_count}
                            </span>
                            <span className="watchers">
                                Watchers: {repo.watchers_count}
                            </span>
                            <span className="forks">
                                Forks: {repo.forks_count}
                            </span>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos } )(ProfileGithub);