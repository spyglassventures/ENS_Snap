# Snap ENS - Devcon VI Project Suhmission

Are you tired of having dozens of useless ENS reminders in your Calander? 
Don't waste more time and use this Python Script to query ENS Data via The Graph
and create your own Push Channel to get notifications for ONLY those ENS domains which 
are no longer in the grace period / no more premium.  

Get an alert to your push inbox.


## Requirements

Push Channel (in Demo, we use the SDK)
Python 3.10
Wallet / 50 Dai - Faucet / Access to Goeli Network


## Preparation
```bash
conda create --name Devcon_py310 python=3.10
pip install jupyter ipykernel
python -m ipykernel install --user --name Devcon_py310
Jupiter notebook
```

## Usage and required libraries

```python
from subgrounds.subgrounds import Subgrounds
import pandas as pd
from datetime import date
import numpy as np

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Thank you also to ETH Gloabl Mentors and the Sponsors.

## License
[MIT](https://choosealicense.com/licenses/mit/)
