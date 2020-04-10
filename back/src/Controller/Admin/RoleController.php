<?php

namespace App\Controller;

use App\Entity\Role;
use App\Repository\RoleRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/admin", name="api_admin_")
 */
class RoleController extends AbstractController
{
    /**
     * @Route("/roles", name="roles_browse", methods={"GET"})
     */
    public function browse(RoleRepository $roleRepository, SerializerInterface $serializer)
    {
        // On récupère tout les articles
        $role = $roleRepository->findAll();

        // Serializer sert à normaliser l'objet Article
        $data = $serializer->normalize($role, null, ['groups' => 'admin']);

        return $this->json($data);
    }

    /**
     * @Route("/roles/{id}", name="roles_read", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function read(Role $role, SerializerInterface $serializer)
    {
        return $this->json($serializer->normalize(
            $role,
            null, ['groups' => 'admin']
        ));
    }

    /**
     * @Route("/roles/edit", name="roles_edit", methods={"PATH"})
     */
    public function edit()
    {
        
    }

    /**
     * @Route("/roles/add", name="roles_add", methods={"POST"})
     */
    public function add()
    {
        
    }

    /**
     * @Route("/roles/{id}/delete", name="roles_delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {

    }
}
