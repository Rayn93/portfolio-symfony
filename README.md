This is a project for create portfolio and personal website using symfony 6 and react.js


Instalations

```
docker-compose up -d
docker-compose exec webserver bash
cd portfolio-symfony/
```

1. Install NVM:

```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   source ~/.bashrc
```

3. Install nodejs and nmp
```
    nvm install v16.13.0
    nvm use v16.13.0
```

3. Install yarn
```
   npm install --global yarn
```


4. Build Assets

```
yarn install
yarn run encore dev --watch
```


URL: http://localhost:89/portfolio-symfony/public/


