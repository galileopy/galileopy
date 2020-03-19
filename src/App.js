import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "./elements/Header";
import Footer from "./elements/Footer";

import About from "./pages/About";
import Resume from "./pages/Resume";
import { profileRequest } from "./redux/actions";

const stateProps = state => ({
  profile: state.profile.resource
});

const dispatchProps = dispatch => ({
  profileLoad: data => dispatch(profileRequest(data))
});

const App = props => {
  const { profile, profileLoad } = props;

  useEffect(() => {
    profile.matchWith({
      Error: () => null,
      Query: () => null,
      Data: () => null,
      Empty: () =>
        profileLoad(profile.update({ id: "currentprofiledata" }))
    });
  });

  const footerData = profile.map(value => value.main.social);
  const headerData = profile.map(value => value.main);
  const aboutData = profile.map(value => value.main);
  const resumeData = profile.map(value => value.resume);

  return (
    <div>
      <Header resource={headerData} />
      <About resource={aboutData} />
      <Resume resource={resumeData} />
      <Footer resource={footerData} />
    </div>
  );
};

export default connect(stateProps, dispatchProps)(App);
