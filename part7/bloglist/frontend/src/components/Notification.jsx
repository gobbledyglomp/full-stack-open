import { Alert } from 'react-bootstrap'
import { XCircle, CheckCircle } from 'react-bootstrap-icons'

import useNotification from '../hooks/useNotification'

const Notification = () => {
  const { notification } = useNotification()

  if (notification.queue === 0) {
    return null
  }

  return (
    <Alert variant={notification.type === 'ERROR' ? 'danger' : 'success'}>
      <Alert.Heading>
        {notification.type === 'ERROR' ? (
          <>
            <XCircle className="me-2" />
            Oh snap! You got an error!
          </>
        ) : (
          <>
            <CheckCircle className="me-2" />
            Success!
          </>
        )}
      </Alert.Heading>
      <p>{notification.text}</p>
    </Alert>
  )
}

export default Notification
