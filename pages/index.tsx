import { useFlags, useFlagsmith } from 'flagsmith/react';
import { useEffect } from 'react';

const Home = () => {
    const flags = useFlags(["cloud_beta_access"], []) // only causes re-render if specified flag values / traits change
    const flagsmith = useFlagsmith()
    useEffect(()=>{
        console.log("Flags changed", flags.cloud_beta_access.enabled)
    },[flags])
    return (
        <div className="App">
            <span>Beta enabled: {`${flags.cloud_beta_access.enabled}`}</span>
            <div>
                {
                    flagsmith.identity? (
                        <button onClick={()=>flagsmith.logout()}>
                            Logout
                        </button>
                    ): (
                        <button onClick={()=>{
                            flagsmith.identify("flagsmith_sample_user")
                        }}>
                            Identify
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default Home
