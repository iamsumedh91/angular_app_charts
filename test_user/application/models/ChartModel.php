<?php
 
    defined('BASEPATH') OR exit('No direct script access allowed');
 
    /**
    * Description of LoginModel
    */
    class ChartModel extends CI_Model
    {
        function __construct()
        {
            parent::__construct();
        }
    
    function fetch_values()
    {
        $query = $this->db->get('data_values');
        $values = $query->result_array();
        
        $data = array();
        foreach ($values as $key => $value) 
        {
            $data[] = ['value' => $value['value']];
        }
        return $data;
    }
}
?>