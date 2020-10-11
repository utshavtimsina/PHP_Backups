<?php
namespace Jigoshop\Service;

use Jigoshop\Entity\Customer;
use Jigoshop\Entity\Order;
use Jigoshop\Entity\Order\Item;
use Jigoshop\Entity\OrderInterface;
use Jigoshop\Entity\Product\Attributes;
use Jigoshop\Shipping\Method;

/**
 * Service calculating tax value for products.
 *
 * @package Jigoshop\Service
 */
interface TaxServiceInterface
{
	/**
	 * Finds and returns available tax definitions for selected parameters.
	 *
	 * @param $taxClass string Tax class.
	 * @param $address  Customer\Address Address to fetch data for.
	 *
	 * @return array Tax definition.
	 */
	public function getDefinition($taxClass, Customer\Address $address);

	/**
	 * @param $address Customer\Address The order.
	 *
	 * @return array List of tax values per tax class.
	 */
	public function getDefinitions(Customer\Address $address);

	/**
	 * @param float $price       Price to tax.
	 * @param array $taxClasses  List of applied tax classes.
	 * @param array $definitions List of tax definitions to use.
	 *
	 * @return float Overall tax value.
	 */
	public function calculate($price, array $taxClasses, array $definitions);

	/**
	 * @param float $price       Price to tax.
	 * @param array $taxClasses  List of applied tax classes.
	 * @param array $definitions List of tax definitions to use.
	 *
	 * @return array List of tax values per tax class.
	 */
	public function get($price, array $taxClasses, array $definitions);

	/**
	 * @param $item  Order\Item Order item to calculate tax for.
	 * @param $order OrderInterface The order.
	 *
	 * @return float Overall tax value.
	 */
	public function calculateForOrder(Order\Item $item, OrderInterface $order);

	/**
	 * @param $item  Item Order item to calculate tax for.
	 * @param $order OrderInterface The order.
	 *
	 * @return array List of tax values per tax class.
	 */
	public function getForOrder(Item $item, OrderInterface $order);

	/**
	 * @param Method         $method Method to calculate tax for.
	 * @param OrderInterface $order  Order with the shipping method.
	 * @param                $price  float Price calculated for current cart.
	 *
	 * @return float Overall tax value.
	 */
	public function calculateForShipping(Method $method, OrderInterface $order, $price);

	/**
	 * @param Method         $method Method to calculate tax for.
	 * @param OrderInterface $order  Order with the shipping method.
	 * @param                $price  float Price calculated for current cart.
	 *
	 * @return array List of tax values per tax class.
	 */
	public function getForShipping(Method $method, OrderInterface $order, $price);

	/**
	 * @return array List of available tax classes.
	 */
	public function getClasses();

	/**
	 * @param                $taxClass string Tax class to get label for.
	 * @param OrderInterface $order    Order to calculate taxes for.
	 *
	 * @return string Tax class label
	 * @throws Exception When tax class is not found.
	 */
	public function getLabel($taxClass, $order);

	/**
	 * @param                $taxClass string Tax class to get label for.
	 * @param OrderInterface $order    Order to calculate taxes for.
	 *
	 * @return string Tax class rate
	 * @throws Exception When tax class is not found.
	 */
	public function getRate($taxClass, $order);

	/**
	 * Fetches and returns properly formatted list of tax rules.
	 *
	 * @return array List of rules.
	 */
	public function getRules();

	/**
	 * @param $rule array Rule to save.
	 *
	 * @return array Saved rule.
	 */
	public function save(array $rule);

	/**
	 * @param $ids array IDs to preserve.
	 */
	public function removeAllExcept($ids);

	/**
	 * Registers all required actions to update prices with taxes.
	 */
	public function register();
}
