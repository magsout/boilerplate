Boilerplate
===========

## Grunt installation:
```
npm install -g grunt-cli
```

## Boilerplate
```
git clone https://github.com/magsout/boilerplate.git
```

## Bundler installation:
```
gem install bundler
gem install rubygems-bundler
gem regenerate_binstubs
```

## Project Gem Dependencies :
Specify your dependencies in a Gemfile and install with: 
```
bundle install --path vendors/bundle
```

## Project npm Dependencies:
```
npm install grunt --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-sass --save-dev
npm install grunt-contrib-imagemin --save-dev
npm install load-grunt-tasks --save-dev
npm install grunt-contrib-handlebars --save-dev
npm install grunt-contrib-compass --save-dev
npm install grunt-bower-task --save-dev
npm install grunt-photobox --save-dev
npm install grunt-autoprefixer --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-combine-media-queries --save-dev
npm install grunt-concurrent --save-dev
npm install --save time-grunt	

```

## Or simple Dependency Install:
```
npm install 
```

## Project Dependencies:
Install bower components
```
grunt first
```
---
##Project Gem Dependencies + Project npm Dependencies + Project Dependencies : one command
```
make init
```
---
## Project dev
Watch compass and handlebars using grunt-concurent
```
grunt dev
```

## Project distribution
Compass compile production, Handlebars compile, Optimize png/jpeg, autoprefixer and Combine media queries
```grunt dist```

## Project clean
Clean bower component and compass compile
```grunt clean```

## Also read

- http://gruntjs.com/getting-started
- http://bundler.io/
- http://bower.io/

##  Inspired By

- https://github.com/kud/marrow
- https://github.com/Integralist/Grunt-Boilerplate

