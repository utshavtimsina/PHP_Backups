<?php

namespace Jigoshop\Admin;

use Jigoshop\Core;
use Jigoshop\Core\Options;
use Jigoshop\Core\Types;
use WPAL\Wordpress;

/**
 * Class containing available pages in Jigoshop.
 *
 * @package Jigoshop
 * @author  Amadeusz Starzykiewicz
 */
class Pages
{
	/** @var \WPAL\Wordpress */
	public $wp;
	/** @var \Jigoshop\Core\Options */
	public $options;

	public function __construct(Wordpress $wp, Options $options)
	{
		$this->wp = $wp;
		$this->options = $options;
	}

	/**
	 * @return bool Current page is product list?
	 */
	public function isProductsList()
	{
		$screen = $this->wp->getCurrentScreen();

		if ($screen !== null) {
			return $screen->post_type === Types::PRODUCT && $screen->id === 'edit-'.Types::PRODUCT;
		}

		return DOING_AJAX && isset($_POST['action']) && (strpos($_POST['action'], 'admin.products') !== false ||
            ($_POST['action'] == 'inline-save' && $_POST['screen'] == 'edit-'.Types::PRODUCT));
	}

	public function isProduct()
	{
		$screen = $this->wp->getCurrentScreen();

		if ($screen !== null) {
			return $screen->post_type === Types::PRODUCT && $screen->id === Types::PRODUCT;
		}

		return DOING_AJAX && isset($_POST['action']) && strpos($_POST['action'], 'admin.product') !== false;
	}

	public function isOrdersList()
	{
		$screen = $this->wp->getCurrentScreen();

		if ($screen !== null) {
			return $screen->post_type === Types::ORDER && $screen->id === 'edit-'.Types::ORDER;
		}

		return DOING_AJAX && isset($_POST['action']) && strpos($_POST['action'], 'admin.orders') !== false;
	}

	public function isOrder()
	{
		$screen = $this->wp->getCurrentScreen();

		if ($screen !== null) {
			return $screen->post_type === Types::ORDER && $screen->id === Types::ORDER;
		}

		return DOING_AJAX && isset($_POST['action']) && strpos($_POST['action'], 'admin.order') !== false;
	}

	public function isEmail()
	{
		$screen = $this->wp->getCurrentScreen();

		if ($screen !== null) {
			return $screen->post_type === Types::EMAIL && $screen->id === Types::EMAIL;
		}

		return DOING_AJAX && isset($_POST['action']) && (strpos($_POST['action'], 'admin.email') !== false ||
            ($_POST['action'] == 'inline-save' && $_POST['screen'] == 'edit-'.Types::EMAIL));
	}

	public function isCouponList()
	{
		$screen = $this->wp->getCurrentScreen();

		if ($screen !== null) {
			return $screen->post_type === Types::COUPON && $screen->id === 'edit-'.Types::COUPON;
		}

		return DOING_AJAX && isset($_POST['action']) && (strpos($_POST['action'], 'admin.coupons') !== false ||
            ($_POST['action'] == 'inline-save' && $_POST['screen'] == 'edit-'.Types::COUPON));
	}

	public function isCoupon()
	{
		$screen = $this->wp->getCurrentScreen();

		if ($screen !== null) {
			return $screen->post_type === Types::COUPON && $screen->id === Types::COUPON;
		}

		return DOING_AJAX && isset($_POST['action']) && strpos($_POST['action'], 'admin.coupon') !== false;
	}

	public function isDashboard()
	{
		$screen = $this->wp->getCurrentScreen();

		if ($screen !== null) {
			return $screen->id == 'toplevel_page_'.Dashboard::NAME;
		}

		return DOING_AJAX && isset($_POST['action']) && strpos($_POST['action'], 'admin.dashboard') !== false;
	}

	public function isSettings()
	{
		$screen = $this->wp->getCurrentScreen();

		if (!empty($_POST) && isset($_POST['option_page']) && $_POST['option_page'] == Settings::NAME) {
			return true;
		}

		if ($screen !== null && $screen->id == Dashboard::NAME.'_page_'.Settings::NAME) {
			return true;
		}

		return defined('DOING_AJAX') && DOING_AJAX && isset($_POST['action']) && strpos($_POST['action'], 'admin.settings') !== false;
	}

	public function isProductCategories()
	{
		$screen = $this->wp->getCurrentScreen();

		if ($screen !== null) {
			return $screen->taxonomy == Types::PRODUCT_CATEGORY;
		}

		return defined('DOING_AJAX') && DOING_AJAX && (
			(isset($_POST['action']) && strpos($_POST['action'], 'admin.product_categories') !== false) ||
			(isset($_POST['taxonomy']) && $_POST['taxonomy'] == Types::PRODUCT_CATEGORY)
		);
	}

	public function isProductTags()
	{
		$screen = $this->wp->getCurrentScreen();

		if ($screen !== null) {
			return $screen->taxonomy == Types::PRODUCT_TAG;
		}

		return defined('DOING_AJAX') && DOING_AJAX && (
			(isset($_POST['action']) && strpos($_POST['action'], 'admin.product_tags') !== false) ||
			(isset($_POST['taxonomy']) && $_POST['taxonomy'] == Types::PRODUCT_TAG)
		);
	}

	public function isMigrationPage()
	{
		$screen = $this->wp->getCurrentScreen();

		if (!empty($_POST) && isset($_POST['option_page']) && $_POST['option_page'] == Migration::NAME) {
			return true;
		}

		if ($screen !== null && $screen->id == Dashboard::NAME.'_page_'.Migration::NAME) {
			return true;
		}

		return defined('DOING_AJAX') && DOING_AJAX && isset($_POST['action']) && strpos($_POST['action'], 'admin.migration') !== false;
	}
}