<?php
/**
 * Netstarter Pty Ltd.
 *
 * @category  RAG
 * @author    Netstarter Team contact@netstarter.com
 * @copyright Copyright © 2018 Netstarter Pty Ltd. (http://www.netstarter.com.au) All rights reserved.
 */

namespace LearnKo\SecondKo\Controller\Index;


use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Framework\App\ResponseInterface;
use Magento\Framework\View\Result\PageFactory;
class Index extends Action
{

    protected $pageFactory;


    public function __construct(Context $context, PageFactory $pageFactory)
    {
        $this->pageFactory = $pageFactory;
        parent::__construct($context);
    }

    /**
     * Execute action based on request and return result
     *
     * Note: Request will be added as operation argument in future
     *
     * @return \Magento\Framework\Controller\ResultInterface|ResponseInterface
     * @throws \Magento\Framework\Exception\NotFoundException
     */
    public function execute()
    {
        return $this->pageFactory->create();
    }
}