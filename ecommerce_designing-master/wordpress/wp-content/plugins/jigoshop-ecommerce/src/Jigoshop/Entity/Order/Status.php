<?php

namespace Jigoshop\Entity\Order;

use WPAL\Wordpress;

/**
 * Order statuses.
 *
 * @package Jigoshop\Entity\Order
 * @author  Amadeusz Starzykiewicz
 */
class Status
{
	const PENDING = 'jigoshop-pending';
	const ON_HOLD = 'jigoshop-on-hold';
	const PROCESSING = 'jigoshop-processing';
	const COMPLETED = 'jigoshop-completed';
	const CANCELLED = 'jigoshop-cancelled';
	const REFUNDED = 'jigoshop-refunded';
//			'failed' => __('Failed', 'jigoshop-ecommerce'), /* can be set from PayPal, not currently shown anywhere -JAP- */
//			'denied' => __('Denied', 'jigoshop-ecommerce'), /* can be set from PayPal, not currently shown anywhere -JAP- */
//			'expired' => __('Expired', 'jigoshop-ecommerce'), /* can be set from PayPal, not currently shown anywhere -JAP- */
//			'voided' => __('Voided', 'jigoshop-ecommerce'), /* can be set from PayPal, not currently shown anywhere -JAP- */

	private static $statuses;
	/** @var Wordpress */
	private static $wp;

	/**
	 * @param Wordpress $wp
	 */
	public static function setWordpress($wp)
	{
		self::$wp = $wp;
	}

	/**
	 * Checks if selected status exists.
	 *
	 * @param $status string Status name.
	 *
	 * @return bool Does status exists?
	 */
	public static function exists($status)
	{
		$statuses = self::getStatuses();

		return isset($statuses[$status]);
	}

	/**
	 * @return array List of available order statuses.
	 */
	public static function getStatuses()
	{
		if (self::$statuses === null) {
			self::$statuses = self::$wp->applyFilters('jigoshop\order\statuses', [
				Status::PENDING => __('Pending', 'jigoshop-ecommerce'),
				Status::ON_HOLD => __('On-Hold', 'jigoshop-ecommerce'),
				Status::PROCESSING => __('Processing', 'jigoshop-ecommerce'),
				Status::COMPLETED => __('Completed', 'jigoshop-ecommerce'),
				Status::CANCELLED => __('Cancelled', 'jigoshop-ecommerce'),
				Status::REFUNDED => __('Refunded', 'jigoshop-ecommerce'),
            ]);
		}

		return self::$statuses;
	}

	/**
	 * Returns status name.
	 *
	 * If name is not found - returns given identifier.
	 *
	 * @param $status string Status identifier.
	 *
	 * @return string Status name.
	 */
	public static function getName($status)
	{
		if (!self::exists($status)) {
			return $status;
		}

		$statuses = self::getStatuses();

		return $statuses[$status];
	}
}
