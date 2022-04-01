import React from 'react'
import styled from 'styled-components'
import { FlexContainer, Button } from '../Theme'

const ListItem = styled.li`
    ${FlexContainer}
    align-items: unset;
    overflow-wrap: break-word;
    box-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    border: 2px solid ${props => props.theme.colors.borderColor};
    padding: 0 1.2rem;
    margin-bottom: 2.5rem;
`

const ListItemContent = styled.p`
    font-size: ${props => props.theme.fontSizes.content};
    text-align: justify;
    margin: 1.5rem 0;
    &.taskComplete {
        color: slategray;
        text-decoration: line-through;
    }
`

const ListButtonContainer = styled.div`
    ${FlexContainer}
    padding: 0;
    > * {
        :last-child {
            margin-bottom: 1.5rem;
        }
    }
`

const ListButton = styled(Button)`
    width: 100%;
    margin-bottom: .7rem;
    &.buttonDisabled,
    &.buttonDisabled:hover,
    &.buttonDisabled:focus,
    &.buttonDisabled::before {
        color: slategray;
        background-color: transparent;
        border-color: slategray;
    }
`

function ToDo(props) {
    return (
        <ListItem id={props.task.task_id}>
            <ListItemContent className={props.task.is_completed ? 'taskComplete' : ''}>{props.task.task_description}</ListItemContent>
            <ListButtonContainer>
                <ListButton
                    type='button'
                    onClick={() => props.updateTaskStatus(props.task.task_id, props.task.is_completed)}
                >
                    {props.task.is_completed ? 'UNDO' : 'DONE'}
                </ListButton>
                <ListButton
                    className={props.task.is_completed ? 'buttonDisabled' : ''}
                    type='button'
                    disabled={props.task.is_completed}
                    onClick={() => props.openModalCard(props.task.task_id)}
                >
                    DETAILS
                </ListButton>
                <ListButton
                    className={props.task.is_completed ? 'buttonDisabled' : ''}
                    type='button'
                    disabled={props.task.is_completed}
                    onClick={() => props.openModalForm(props.task.task_id)}
                >
                    EDIT
                </ListButton>
                <ListButton
                    type='button'
                    onClick={() => props.deleteTask(props.task.task_id)}
                >
                    DELETE
                </ListButton>
            </ListButtonContainer>
        </ListItem>
    )
}

export default ToDo
