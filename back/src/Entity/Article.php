<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ArticleRepository")
 * @ApiResource(normalizationContext={"groups"={"article_read"}})
 */
class Article
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups({"article_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @groups({"article_read"})
     * @Assert\NotBlank(message="Le titre est obligatoire")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @groups({"article_read"})
     * @Assert\NotBlank(message="Le contenu est obligatoire")
     */
    private $content;

    /**
     * @ORM\Column(type="datetime")
     * @groups({"article_read"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @groups({"article_read"})
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=160, nullable=true)
     * @groups({"article_read"})
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

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="article")
     * @ORM\JoinColumn(nullable=false)
     * @groups({"article_read"})
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="article")
     */
    private $comment;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Tag", inversedBy="articles")
     */
    private $tag;

    public function __construct()
    {
        $this->comment = new ArrayCollection();
        $this->tag = new ArrayCollection();
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

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|Comment[]
     */
    public function getComment(): Collection
    {
        return $this->comment;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comment->contains($comment)) {
            $this->comment[] = $comment;
            $comment->setArticle($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comment->contains($comment)) {
            $this->comment->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getArticle() === $this) {
                $comment->setArticle(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTag(): Collection
    {
        return $this->tag;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tag->contains($tag)) {
            $this->tag[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tag->contains($tag)) {
            $this->tag->removeElement($tag);
        }

        return $this;
    }
}
