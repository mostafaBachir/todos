import React from 'react'
import {FormControl, FormGroup, HelpBlock, ControlLabel} from 'react-bootstrap'
//import { FormGroup, FormFeedback, Label, Input } from 'reactstrap';
export default ({name, label, error, type, ...rest}) => {
  const id = `id_${name}`,
        input_type = type?type:"text"
  return (
    <FormGroup color={error?"danger":""}>
      {label?<ControlLabel htmlFor={id}>{label}</ControlLabel>: ""}

      <FormControl type={input_type} name={name}
             id={id} className={error?"is-invalid":""}
             {...rest} />
      {error?
         <HelpBlock className="invalid-feedback">
           {error}
         </HelpBlock>
         : ""
      }
    </FormGroup>)
}
