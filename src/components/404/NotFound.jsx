import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    session: {
        position: 'relative',
        zIndex: 4000,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        padding: `40px ${theme.spacing(1)}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 0 auto',
        flexDirection: 'column',
        minHeight: '100%',
        textAlign: 'center'
    },
    title: {
        fontSize: '150px',
        lineHeight: 1.2,
        fontWeight: 100,
        display: 'inline-table',
        position: 'relative',
        background: theme.palette.primary.main,
        color: '#fff',
        padding: `0 ${theme.spacing(1) * 3}px`,
        borderRadius: '60px',
        cursor: 'pointer',
        margin: `0 0 ${theme.spacing(1)}px`,
        '&:after': {
          top: '100%',
          left: '50%',
          border: 'solid transparent',
          content: '""',
          height: 0,
          width: 0,
          position: 'absolute',
          pointerEvents: 'none',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderTopColor: theme.palette.primary.main,
          borderWidth: '8px',
          marginLeft: '-8px'
        }
    },
    subtitle: {
        fontSize: '32px',
        fontWeight: 900
    },
    content2: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1) * 3,
    },
}))

const NotFound = () => {
    const cls = useStyles();
    return (
        <main className = {cls.content2}>
            <div className = {cls.session}>
                <div className = {cls.content}>
                    <Typography className={cls.title}>404</Typography>
                    <Typography className={cls.subtitle}>Страница не найдена ! </Typography>

                    <Typography variant="caption">
                        Кажется Вы заблудились, ничего страшного. Всегда можно вернуться в {' '}
                        <NavLink to="/"> главную страницу </NavLink>
                    </Typography>

                </div>
            </div>
        </main>
    )
}

export default NotFound;