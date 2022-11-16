import React from 'react';
import {Button, Card, CardActions, CardContent, List, ListItem, Typography} from '@mui/material';
import {ListItemDrawer} from '../ListItemDrawer';
import {useState} from 'react';

export function CustomList() {
    const [drawerOpen, openDrawer] = React.useState(true);
    const [dataItem, setDataItem] = useState(0);
    const data = [
        {
            name: 'Item #1',
            viewed: false,
            description: 'Description of item #1',
            status: ['new', 'complete', 'in progress', 'on hold', 'archived'],
        },
        {
            name: 'Item #2',
            viewed: false,
            description: 'Description of item #2',
            status: ['new', 'complete', 'in progress', 'on hold', 'archived'],
        },
        {
            name: 'Item #3',
            viewed: false,
            description: 'Description of item #3',
            status: ['new', 'complete', 'in progress', 'on hold', 'archived'],
        },
        {
            name: 'Item #4',
            viewed: false,
            description: 'Description of item #4',
            status: ['new', 'complete', 'in progress', 'on hold', 'archived'],
        },
        {
            name: 'Item #5',
            viewed: false,
            description: 'Description of item #5',
            status: ['new', 'complete', 'in progress', 'on hold', 'archived'],
        },
    ];

    return (
        <div>
            <List>
                {data.map((item, index) => (
                    <ListItem key={index}>
                        <Card sx={{minWidth: 275}}>
                            <CardContent>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    {item.status[index]}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                    {item.viewed}
                                </Typography>
                                <Typography variant="body2">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    onClick={() => setDataItem(data[item])}
                                >Store in State</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                ))}
            </List>
            <ListItemDrawer/>
        </div>
    );
}
