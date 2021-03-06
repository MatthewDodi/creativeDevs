import React, { Component } from 'react';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    const firstName = profile.user.name.trim().split(' ')[0];
    const bio = profile.bio ? (
      profile.bio
    ) : (
      <span>{firstName} hasn't added his bio yet</span>
    );
    const skills = profile.skills.map((skill, i) => (
      <div key={skill + i} className="p-3">
        <i className="fa fa-check" /> {skill.trim()}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-danger">{firstName}'s Bio</h3>
            <p className="lead">{bio}</p>
            <hr />
            <h3 className="text-center text-danger">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
