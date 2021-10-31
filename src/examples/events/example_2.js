import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export function EventExample2(){
    return (
        <>
            <Tooltip title="Are you shore you want to delete ?" arrow>
                <Button>Delete!</Button>
            </Tooltip>
        </>
    )
}