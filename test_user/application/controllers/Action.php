<?php
 
defined('BASEPATH') OR exit('No direct script access allowed');

/*
* Including the required libraries here
*/ 
require(APPPATH . '/libraries/REST_Controller.php');
 

/**
 * Description of Action Controller
 */
class Action extends REST_Controller {

    /*
    * Loading the model in Constructor
    */
    function __construct() {
        parent::__construct();
        $this->load->model('ChartModel', 'cm');
    }
    
    /*
    * Function to get database values
    */
    function info_post()
    {
        $result = $this->cm->fetch_values();

        $data = [ "seriesname" => "New_data", "data" => $result];

        $this->response($data);
    }
}

?>