import React from 'react';
import moduleUserName from './MyUserName.module.sass'

const MyUserName = ({ name =  'Михаил', ...props }) => {
    return (
        <div className={moduleUserName.usernameBox}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M22.5 1.44338C24.047 0.550212 25.953 0.550212 27.5 1.44338L44.1506 11.0566C45.6976 11.9498 46.6506 13.6004 46.6506 15.3868V34.6132C46.6506 36.3996 45.6976 38.0502 44.1506 38.9434L27.5 48.5566C25.953 49.4498 24.047 49.4498 22.5 48.5566L5.84937 38.9434C4.30236 38.0502 3.34937 36.3996 3.34937 34.6132V15.3868C3.34937 13.6004 4.30236 11.9498 5.84936 11.0566L22.5 1.44338Z" fill="#FDC029" />
            </svg>
            <div style={{'margin-left' : '10px'}}>
                {name}
            </div>
        </div>
    );
};

export default MyUserName;