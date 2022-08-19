
## Run

### with Docker

```sh
PROJECT_NAME="budget-expenses-tracker"
docker build -t $PROJECT_NAME .
docker run -p 3000:3000 $PROJECT_NAME
```