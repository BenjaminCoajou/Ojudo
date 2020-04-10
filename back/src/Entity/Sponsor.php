<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SponsorRepository")
 */
class Sponsor
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups("admin")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=160)
     * @groups("admin")
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=120)
     * @groups("admin")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @groups("admin")
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=160)
     * @groups("admin")
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=10)
     * @groups("admin")
     */
    private $phone_number;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phone_number;
    }

    public function setPhoneNumber(string $phone_number): self
    {
        $this->phone_number = $phone_number;

        return $this;
    }
}
