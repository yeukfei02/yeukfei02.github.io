import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import yellow from '@material-ui/core/colors/yellow';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

const BorderLinearProgress2 = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten('#8bc34a', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#8bc34a',
  },
})(LinearProgress);

const BorderLinearProgress3 = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten('#2196f3', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#2196f3',
  },
})(LinearProgress);

function Description() {
  const classes = useStyles();

  return (
    <div>
      <div className="my-4 d-flex justify-content-center">
        <Paper className={`${classes.root} mx-4 w-75`}>
          <div>
            <Typography variant="h6" gutterBottom>
              About me
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hi, my name is Wu Yeuk Fei, Donald. I am a software developer.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I find I like programming when I studied in my final year. I feel satisfied after I solve the problem and create something useful.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I can do web frontend, backend API and android.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email or contact me, I will tell you more.
            </Typography>
          </div>
        </Paper>
      </div>
      <div className="my-4 d-flex justify-content-center">
        <Paper className={`${classes.root} mx-4 w-75`}>
          <div>
            <Typography variant="body2" gutterBottom>
              <LocationOnIcon /> Hong Kong
            </Typography>
            <Typography variant="body2" gutterBottom>
              <HomeIcon /> Hong Kong
              </Typography>
            <Typography variant="body2" gutterBottom>
              <EmailIcon /> yeukfei02@gmail.com
            </Typography>
          </div>
        </Paper>
      </div>
      <div className="my-4 d-flex justify-content-center">
        <Paper className={`${classes.root} mx-4 w-75`}>
          <div>
            <Typography variant="h6" gutterBottom>
              Education
            </Typography>
            <Typography variant="body2" gutterBottom>
              <SchoolIcon /> Nanyang Technological University - MSc (Information Systems)
            </Typography>
            <Typography variant="body2" gutterBottom>
              <SchoolIcon /> City University of Hong Kong - BBA (Information Management)
            </Typography>
          </div>
        </Paper>
      </div>
      <div className="my-4 d-flex justify-content-center">
        <Paper className={`${classes.root} mx-4 w-75`}>
          <div>
            <Typography variant="h6" gutterBottom>
              Language
            </Typography>

            <Typography variant="body2" gutterBottom>
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarBorderIcon />
              <StarBorderIcon className="mr-1" />
              English
            </Typography>

            <Typography variant="body2" gutterBottom>
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} className="mr-1" />
              Cantonese
            </Typography>

            <Typography variant="body2" gutterBottom>
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarBorderIcon className="mr-1" />
              Mandarin
            </Typography>
          </div>
        </Paper>
      </div>
      <div className="my-4 d-flex justify-content-center">
        <Paper className={`${classes.root} mx-4 w-75`}>
          <div>
            <Typography variant="h6" gutterBottom>
              Programming skills
            </Typography>
            <Typography variant="body2" gutterBottom>
              JavaScript (React.js, React Native, Node.js)
            </Typography>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={90}
            />
            <br />
            <Typography variant="body2" gutterBottom>
              Java (Android, Kotlin)
            </Typography>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={85}
            />
            <br />
            <Typography variant="body2" gutterBottom>
              Go
            </Typography>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={60}
            />
            <br />
            <Typography variant="body2" gutterBottom>
              Postgres
            </Typography>
            <BorderLinearProgress2
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={60}
            />
            <br />
            <Typography variant="body2" gutterBottom>
              MongoDB
            </Typography>
            <BorderLinearProgress2
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={55}
            />
            <br />
            <Typography variant="body2" gutterBottom>
              Docker
            </Typography>
            <BorderLinearProgress3
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={40}
            />
            <br />
            <Typography variant="body2" gutterBottom>
              Unix Shell Scripting
            </Typography>
            <BorderLinearProgress3
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={30}
            />
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Description;
