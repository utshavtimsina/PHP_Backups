<?php

namespace Jigoshop\Factory;

use Jigoshop\Core\Options;
use Jigoshop\Service\ShippingService as Service;
use WPAL\Wordpress;

class ShippingService
{
	/** @var \WPAL\Wordpress */
	private $wp;
	/** @var \Jigoshop\Core\Options */
	private $options;

	public function __construct(Wordpress $wp, Options $options)
	{
		$this->wp = $wp;
		$this->options = $options;
	}

	/**
	 * @return Service Tax service.
	 * @since 2.0
	 */
	public function getService()
	{
		$service = new Service();

		switch ($this->options->get('advanced.cache')) {
			// TODO: Add caching mechanisms
//			case 'simple':
//				$service = new SimpleCache($service);
//				break;
			default:
				$service = $this->wp->applyFilters('jigoshop\core\get_shipping_service', $service);
		}

		return $service;
	}
}
