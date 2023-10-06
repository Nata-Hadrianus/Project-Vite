import React from "react"
import { Button, CornerDialog } from 'evergreen-ui'

export function Coner() {
    const [isShown, setIsShown] = React.useState(false)
    return (
      <React.Fragment>
        <CornerDialog
          title="Welcome to this new feature"
          isShown={isShown}
          onCloseComplete={() => setIsShown(false)}
        >
          The corner dialog component is used for new feature announcements and
          feedback requests from the user.
        </CornerDialog>
        <Button onClick={() => setIsShown(true)}>
          Show “Learn More” Corner Dialog
        </Button>
      </React.Fragment>
    )
  }