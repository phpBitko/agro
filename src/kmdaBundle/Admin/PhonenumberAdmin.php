<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of LotsAdmin
 *
 * @author asokolsky
 */
namespace kmdaBundle\Admin;
 
use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;
// use AES\Bundle\landsBundle\Entity\Lots;
// use kmdaBundle\Entity\Oraganization;


class PhonenumberAdmin extends Admin
{

protected function configureFormFields(FormMapper $formMapper)
  {
    $formMapper
      ->add('name', null, array('label' => 'Номер телефона'));
  }
  
    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        // this text filter will be used to retrieve autocomplete fields
        $datagridMapper
            ->add('name')
        ;
    }
}