<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class PortfolioController extends AbstractController
{
    #[Route(path: '/', name: 'portfolio_homepage', methods: ['GET'])]
    public function number(): Response
    {
        $number = random_int(0, 100);

        return $this->render('portfolio/base.html.twig', [
            'number' => $number,
        ]);
    }
}
