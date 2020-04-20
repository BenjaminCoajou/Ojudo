<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EventRepository")
 * @ApiResource(normalizationContext={"groups"={"event_read"}})
 */
class Event
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups({"event_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @groups({"event_read"})
     * @Assert\NotBlank(message="Le titre est obligatoire")
     */
    private $title;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @groups({"event_read"})
     */
    private $date;

    /**
     * @ORM\Column(type="string", length=255)
     * @groups({"event_read"})
     * @Assert\NotBlank(message="l'adresse est obligatoire")
     * @Assert\Length(max=255, maxMessage="le nombre de caractère maximal est dépassé", min=10, minMessage="le nombre de caractère est trop minime" )
     */
    private $place;

    /**
     * @ORM\Column(type="text")
     * @groups({"event_read"})     * 
     * @Assert\NotBlank(message="Le contenu est obligatoire")
     */
    private $content;
    
    /**
     * @ORM\Column(type="datetime")
     * @groups({"event_read"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @groups({"event_read"})
     */
    private $updatedAt;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Categorie", mappedBy="event")
     * @groups({"event_read"})
     */
    private $categories;

      /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Image(
     *      minWidth="50",
     *      maxWidth="250",
     *      minWidth="La largeur de l'image est trop petite ({{width}}px). La largeur minimale attendue est de {{min_width}}px.",
     *      maxWidthMessage="La largeur de l'image est trop grande ({{width}}px). La largeur maximale autorisée est de {{max_width}} px.",
     *      minHeight="50",
     *      maxHeight="250",
     *      minHeight="La hauteur de l'image est trop petite ({{heigth}}px). La hauteur minimale attendue est de {{min_heigth}}px.",
     *      maxHeightMessage="La hauteur de l'image est trop grande ({{heigth}}px). La hauteur maximale autorisée est de {{max_heigth}} px.",
     *      mimeTypesMessage = "Uniquement .jpeg .png .jpg and .gif est valide"
     * )
     */
    private $picture;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getPlace(): ?string
    {
        return $this->place;
    }

    public function setPlace(string $place): self
    {
        $this->place = $place;

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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|Categorie[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Categorie $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
            $category->addEvent($this);
        }

        return $this;
    }

    public function removeCategory(Categorie $category): self
    {
        if ($this->categories->contains($category)) {
            $this->categories->removeElement($category);
            $category->removeEvent($this);
        }

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }
}
