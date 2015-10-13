<?php

/*
Plugin Name: Type it Local
Plugin URI: http://github.com/siddharthashok/typeitlocal
Description: TypeItLocal
Version: 0.1
Author: Siddharth Ashok
Author URI: http://siddharthashok.com/
*/

defined( 'ABSPATH' ) or die( 'Plugin file cannot be accessed directly.' );

function say_hello(){
echo 'Hello world. This is my first wordpress plugin';

?>

<script type="text/javascript">

//var plugins_folder = '<?php echo plugin_basename( __FILE__ ); ?>';
var plugins_folder = '<?php echo plugin_dir_url( __FILE__ ); ?>';

//plugins_folder = plugins_folder.replace('typeitlocal.php','');

var plugins_url = plugins_folder;

console.log(plugins_folder);
console.log(plugins_url);


</script>
<?php


wp_enqueue_style('stylsheet', plugins_url( '/css/jquery.ime.css', __FILE__ ) );


wp_enqueue_script( 'rangy-core', plugins_url('/libs/rangy/rangy-core.js',__FILE__), array(), '1.0.0', true );
wp_enqueue_script( 'jquery_ime', plugins_url( '/src/jquery.ime.js', __FILE__ ), array(), '1.0.0', true );
wp_enqueue_script( 'jquery_ime_selector', plugins_url( '/src/jquery.ime.selector.js', __FILE__ ), array(), '1.0.0', true );
wp_enqueue_script( 'jquery_ime_prefrences', plugins_url( '/src/jquery.ime.preferences.js', __FILE__ ), array(), '1.0.0', true );
wp_enqueue_script( 'jquery_ime_inputmedhods', plugins_url( '/src/jquery.ime.inputmethods.js', __FILE__ ), array(), '1.0.0', true );

?>
<script type="text/javascript">


jQuery(function ($) {
	$("#comment").ime();
// jQuery( document ).ready( function () {
// 	jQuery("#comment").ime();
// 	console.log("yes");
//});


});




</script>

<?php
}

add_action ( 'comment_form', 'say_hello');

?>
