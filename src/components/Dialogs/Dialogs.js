import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog}>
                    Vadym
                </div>
                <div className={classes.dialog}>
                    Vadym
                </div>
                <div className={classes.dialog}>
                    Vadym
                </div>
                <div className={classes.dialog}>
                    Vadym
                </div>
                <div className={classes.dialog}>
                    Vadym
                </div>
            </div>
            <div className={classes.messages}>
               <div className={classes.message}>
                    123
               </div>
               <div className={classes.message}>
                    123
               </div>
               <div className={classes.message}>
                    123
               </div>
            </div>
        </div>
    )
}

export default Dialogs;