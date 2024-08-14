import { useContext } from 'react';
import { Store } from '../Store';
function Profile() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {userInfo } = state;

    return (
        
            <div class="d-flex justify-content-center">
                <img src={require("./images/profile.png")} alt="profile_img"/>
                <div>
                <br/>
                <br/>
                <h2>User Name : {userInfo.name}</h2>
                <h2>User Email Id : {userInfo.email}</h2>
                </div>
            </div>

        
    )

}
export default Profile