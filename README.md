![](img/ENS_Snap_Cover.png?raw=true)

# ENS SNAP - Devcon VI Project Submission

Are you tired of having dozens of useless ENS reminders in your calendar? 
Don't waste more time and use this Python Script to query ENS Data via The Graph
and create your own Push Channel to get notifications for ONLY those ENS domains which 
are no longer in the grace period / no more premium.  

Get an alert to your push inbox.

## How its made
The project uses The Graph Explorer (via Subgrounds) to query ENS domains, including their expiry date. A python script calculates the expected date, when the grace period is over and the date, when premium is zero. 

The script then creates the payload for a Push Channel and executes a Javascript file, so subscribed users get the information about the upcoming Snap (register the domain) in their inbox / phone notification.

This benefits all ENS collectors that no longer have to check over and over again, if an ENS domain has been expended.


## Requirements

- Push Channel (in Demo, we use the SDK)
- Python 3.10
- Wallet / 50 Dai - Faucet / Access to Goeli Network


## Preparation for Python Notebook
```bash
- conda create --name Devcon_py310 python=3.10
- pip install jupyter ipykernel
- python -m ipykernel install --user --name Devcon_py310
- Jupiter notebook
```

## Preparation to install Push SDK
```bash
follow https://docs.epns.io/developers/developer-tooling/epns-sdk/epns-sdk-starter-kit
```

## Create Push Channel
* Visit https://app.push.org/#/channels
* Docs https://docs.epns.io/developers/developer-guides/create-your-notif-channel

## Usage and required libraries

```python
from subgrounds.subgrounds import Subgrounds
import pandas as pd
from datetime import date
import numpy as np
```

Then run Python Notebook, which will create the payload and fire the trigger to Push.
Visit https://staging.push.org/#/inbox or use the iOS App to receive Notifications. Enable "Notification" for best use.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Thank you also to ETH Gloabl Mentors and the Sponsors.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Problem
![](img/Problem.png?raw=true)

## Solution: Data
![](img/TableDomains.png?raw=true)

## Solution: Notification
![](img/Phone.PNG?raw=true)

## Limitations
- lots of user unfriendly requirements (SDK, ...)
- we query all the ENS Domains of a holder.
- data heavy on The Graph, can be improved
- Premium period set is 20, in demo it is set to 5 for better illustration
- has to run every day

## Future Work
- Ability to add Channel automatically, add users, and holders
- Limit NFS Names (maybe include regex fearch)
- include variable premium time
- should be depoyed on a server
- Testing
