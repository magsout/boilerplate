#Configuration du projet compass


# Root du projet
http_path = '/'

#Repertoire css
css_dir = 'assets/css/'

# Repertoire sass
sass_dir = 'sass/'

#Repertoire image
images_dir =  'assets/images/'


# Environnement de production : compass compile/watch sass/default.scss -e production

if environment == :production
  	output_style = :compressed
  	line_comments = false
  	sass_options = { :debug_info => false }  	

# Environnement de developpement : compass compile/watch sass/default.scss

else
	output_style = :expanded
	sass_options = { :debug_info => true }
	line_comments	= true
end
