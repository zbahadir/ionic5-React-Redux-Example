import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAlert, IonIcon, IonToggle, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import { setUsername, setDarkMode } from '../data/user/user.actions';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import { moonOutline } from 'ionicons/icons';

import './Home.css';

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  username?: string;
  darkMode?: boolean;
}

interface DispatchProps {
  setUsername: typeof setUsername;
  setDarkMode: typeof setDarkMode

}

interface HomeProps extends OwnProps, StateProps, DispatchProps { }

const Home: React.FC<HomeProps> = ({ darkMode, setDarkMode, setUsername, username }) => {
  const [showAlert, setShowAlert] = useState(false);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ReSelecet Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>Username: {username}</IonItem>
          <IonItem>Mode: {darkMode}</IonItem>

          <IonItem onClick={() => setShowAlert(true)}>Change Value</IonItem>
          <IonItem>
            <IonIcon slot="start" icon={moonOutline}></IonIcon>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
          </IonItem>

        </IonList>
      </IonContent>

      <IonAlert
        isOpen={showAlert}
        header="Change Username"
        buttons={[
          'Cancel',
          {
            text: 'Ok',
            handler: (data) => {
              setUsername(data.username);
            }
          }
        ]}
        inputs={[
          {
            type: 'text',
            name: 'username',
            value: username,
            placeholder: 'username'
          }
        ]}
        onDidDismiss={() => setShowAlert(false)}
      />

    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  
  // GETDATA  
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    username: state.user.username
  }),
  
  // SET DATA
  mapDispatchToProps: {
    setUsername,
    setDarkMode
  },

  component: Home
})
