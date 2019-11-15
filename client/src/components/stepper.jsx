import React, { Component } from "react";
import ProductName from './productName'
import Items from './items'
import Preview from './preview'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function getproductname(val){
  console.log(val)

}

class HorizontalLabelPositionBelowStepper extends Component{
 
  getStepContent=(stepIndex)=> {
    switch (stepIndex) {
      case 0:
        return <ProductName getproductname={getproductname}/>;
      case 1:
        return <Items/>;
      case 2:
        return <Preview/>;
      default:
        return 'Unknown stepIndex';
    }
  }
 useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
 getSteps=()=> {
  return 
}

 classes = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
  //const [activeStep, setActiveStep] = React.useState(0);
  state={activeStep:'',setActiveStep:''}
  steps = ['Select your Product', 'Add the Items', 'Preview'];

   handleNext = () => {
     this.setState({activeStep:this.activeStep+1})
    // setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

   handleBack = () => {
    this.setState({activeStep:this.activeStep-1})
    // setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

   handleReset = () => {
    this.setState({activeStep:0})
  };
render(){
  return (
    <div className={this.classes.root}>
      <Stepper activeStep={this.state.activeStep} alternativeLabel>
        {this.steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {this.state.activeStep === this.steps.length ? (
          <div>
            <Typography className={this.classes.instructions}>All steps completed</Typography>
            <Button onClick={this.handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={this.classes.instructions}>{this.getStepContent(this.state.activeStep)}</Typography>
            <div>
              <Button
                disabled={this.state.activeStep === 0}
                onClick={this.handleBack}
                className={this.classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={this.handleNext}>
                {this.state.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
    }
}

export default HorizontalLabelPositionBelowStepper
