import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import profilePic from '../../images/profile.png';

function PersonalSection() {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/yeukfei02');
  }

  const handleTwitterClick = () => {
    window.open('https://twitter.com/yeukfei02');
  }

  const handleGithubClick = () => {
    window.open('https://github.com/yeukfei02');
  }

  const handleEmailClick = () => {
    window.open('mailto:yeukfei02@gmail.com');
  }

  return (
    <div className="text-center">
      <img src={profilePic} className="my-4 rounded-circle mx-auto d-block" alt="" width="200" height="200" />
      <Typography variant="h4" gutterBottom>
        Wu Yeuk Fei (Donald)
      </Typography>
      <Typography variant="h5" gutterBottom>
        Software Developer
      </Typography>
      <Typography variant="body1" gutterBottom>
        Skype id: yeukfei02
      </Typography>
      <Typography variant="body1" gutterBottom>
        AngelList: angel.co/yeukfei02
      </Typography>

      <Tooltip title="yeukfei02" placement="bottom">
        <FacebookIcon style={{ cursor: 'pointer' }} className="mr-3" fontSize="large" onClick={handleFacebookClick} />
      </Tooltip>
      <Tooltip title="yeukfei02" placement="bottom">
        <TwitterIcon style={{ cursor: 'pointer' }} className="mr-3" fontSize="large" onClick={handleTwitterClick} />
      </Tooltip>
      <Tooltip title="yeukfei02" placement="bottom">
        <GitHubIcon style={{ cursor: 'pointer' }} className="mr-3" fontSize="large" onClick={handleGithubClick} />
      </Tooltip>
      <Tooltip title="yeukfei02@gmail.com" placement="bottom">
        <EmailIcon style={{ cursor: 'pointer' }} className="mr-3" fontSize="large" onClick={handleEmailClick} />
      </Tooltip>
    </div>
  );
}

export default PersonalSection;
