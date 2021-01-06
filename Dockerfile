# Imported from GoBoating. Will need to be updated

FROM nikolaik/python-nodejs:python3.8-nodejs14 as base

WORKDIR /var/www
COPY . .

# Install Python Dependencies
RUN ["pip", "install", "-r", "requirements.txt"]


# Build our React App
RUN ["npm", "install", "--prefix", "nwo-client"]
# ~~ REQUIRES SETTING ~~
ENV REACT_APP_BASE_URL=https://newwingorder.herokuapp.com
RUN ["npm", "run", "build", "--prefix", "nwo-client"]

# Move our react build for Flask to serve
# Use cp here because we're copying files inside our working directory, not from
# our host machine.
RUN ["cp", "-r", "nwo-client/build", "backend/static"]

COPY --from=build-stage /react-app/build/* app/static/

# Setup Flask environment
ENV FLASK_APP=backend
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True

EXPOSE 8000

# Run flask environment
CMD gunicorn backend:app
