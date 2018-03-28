import React from 'react';
import withRoot from '../withRoot';
import {withStyles} from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import ProjectList from '../component/project/list';
const styles = theme => ({
    listItem:{

    },
    activeItem:{
        backgroundColor:'#9cf',
        color:'#fff'
    }
});


class index extends React.Component {

    state = {
        checked: '我的项目',
        menus:[
            {
                name:'我的项目'
            },
            {
                name:'团队项目'
            },
            {
                name:'公共项目'
            }
        ]
    };

    handleToggle = value => () => {
        this.setState({
            checked: value.name,
        });
    };

    render(){
        const { classes } = this.props;
        return (
            <div style={{
                marginTop:-24,
                boxSizing:'border-box'
            }}>
                <div style={{height:'100%',position:'fixed',width:200,backgroundColor:'#f2f2f2'}}>
                    <List>
                        {this.state.menus.map(value => (
                            <ListItem onClick={this.handleToggle(value)} key={value.name} dense button className={classes.listItem+' '+(this.state.checked===value.name?classes.activeItem:'')}>
                                {/*<Avatar alt="Remy Sharp" src="/static/images/remy.jpg" />*/}
                                <ListItemText primary={`${value.name}`} />
                                {/*<ListItemSecondaryAction>*/}
                                    {/*<Checkbox*/}
                                        {/*onChange={this.handleToggle(value)}*/}
                                        {/*checked={this.state.checked.indexOf(value) !== -1}*/}
                                    {/*/>*/}
                                {/*</ListItemSecondaryAction>*/}
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div style={{
                    marginLeft:201
                }}>
                    <ProjectList />
                </div>

            </div>
        )
    }
}
const indexRouter = withStyles(styles)(index);
export default withRoot(indexRouter);