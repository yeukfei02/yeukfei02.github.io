import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import yellow from "@material-ui/core/colors/yellow";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten("#ff6c5c", 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c",
  },
})(LinearProgress);

const BorderLinearProgress2 = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten("#8bc34a", 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#8bc34a",
  },
})(LinearProgress);

const BorderLinearProgress3 = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten("#2196f3", 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#2196f3",
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
              I find I like programming when I studied in my final year. I feel
              satisfied after I solve the problem and create something useful.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I can do web frontend, mobile app and backend API.
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
            <div
              className="my-2"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <LocationOnIcon />
              <div className="mx-2 d-flex align-items-center">Hong Kong</div>
            </div>

            <div
              className="my-2"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <HomeIcon />
              <div className="mx-2 d-flex align-items-center">Hong Kong</div>
            </div>

            <div
              className="my-2"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <EmailIcon />
              <div className="mx-2 d-flex align-items-center">
                yeukfei02@gmail.com
              </div>
            </div>
          </div>
        </Paper>
      </div>
      <div className="my-4 d-flex justify-content-center">
        <Paper className={`${classes.root} mx-4 w-75`}>
          <div>
            <Typography variant="h6" gutterBottom>
              Education
            </Typography>

            <div
              className="my-2"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <SchoolIcon />
              <div className="mx-2 d-flex align-items-center">
                Nanyang Technological University - MSc (Information Systems)
              </div>
            </div>

            <div
              className="my-2"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <SchoolIcon />
              <div className="mx-2 d-flex align-items-center">
                City University of Hong Kong - BBA (Information Management)
              </div>
            </div>
          </div>
        </Paper>
      </div>
      <div className="my-4 d-flex justify-content-center">
        <Paper className={`${classes.root} mx-4 w-75`}>
          <div>
            <Typography variant="h6" gutterBottom>
              Language
            </Typography>

            <div
              className="my-2"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarBorderIcon />
              <StarBorderIcon className="mr-1" />
              <div className="d-flex align-items-center">English</div>
            </div>

            <div
              className="my-2"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} className="mr-1" />
              <div className="d-flex align-items-center">Cantonese</div>
            </div>

            <div
              className="my-2"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarIcon style={{ color: yellow[700] }} />
              <StarBorderIcon className="mr-1" />
              <div className="d-flex align-items-center">Mandarin</div>
            </div>
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
              TypeScript
            </Typography>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={90}
            />
            <br />

            <Typography variant="body2" gutterBottom>
              Serverless (AWS Api Gateway, AWS Lambda, AWS Dynamodb, AWS
              CloudWatch, AWS X-Ray)
            </Typography>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={90}
            />
            <br />

            <Typography variant="body2" gutterBottom>
              Graphql (Apollo Server, Apollo Client)
            </Typography>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={75}
            />
            <br />

            <Typography variant="body2" gutterBottom>
              Java (Android, Kotlin)
            </Typography>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={75}
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
              Python
            </Typography>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={50}
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
