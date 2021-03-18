import React from 'react'
import { Step } from 'semantic-ui-react'
import { CreateFormTypeEnum, formTypeFunction } from "../../../../utilities/Additional";
import { IsubmitState } from './ordersAddons';
interface IProps 
{
    submitState: IsubmitState
    dresstype:CreateFormTypeEnum 
    clienttype: CreateFormTypeEnum 
}
const OrderProgress:React.FC<IProps> = ({submitState,clienttype,dresstype}) => {
    const {isClientReady,isDressReady,isOrderReady} = submitState
    return (
  <Step.Group ordered>
    <Step completed={isClientReady}>
      <Step.Content>
        <Step.Title>Klient</Step.Title>
        <Step.Description>{isClientReady ? formTypeFunction(clienttype,"klienta")
        : <span className="progress-error">Uzupełnij dane</span>}</Step.Description>
      </Step.Content>
    </Step>

    <Step completed={isDressReady}>
      <Step.Content>
        <Step.Title>Suknia</Step.Title>
        <Step.Description>{isDressReady ? formTypeFunction(dresstype,"suknie") : <span className="progress-error">Uzupełnij dane</span>}</Step.Description>
      </Step.Content>
    </Step>

    <Step completed={isOrderReady}>
      <Step.Content>
        <Step.Title>Szczegóły zamówienia</Step.Title>
        <Step.Description>{isOrderReady ? <span>Dane zostały zapisane</span> : <span className="progress-error">Uzupełnij dane</span>}</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
    )
}

export default OrderProgress
