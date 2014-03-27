init: 
	@ echo "❯ Initializing..."
	@ bundle install --path vendors/bundle
	@ npm install
	@ bower install
	
update:
	@ echo "❯ Updating..."
	@ npm update
	@ bower update

watch:
	@ echo "❯ Watching..."
	@ grunt dev
	
dist:
	@ echo "❯ Distribution..."
	@ grunt dist
	@ (cd js-compile; ./build.sh front)
	@ (cd js-compile; ./build.sh admin)