<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ApiResource
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups("admin")
     */
    private $id;
    /**
     * @ORM\Column(type="string", nullable=true)
     * @groups("admin")
     */
    private $birthday;
/**
     * @ORM\Column(type="string", length=60)
     * @groups("admin")
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=90)
     * @groups("admin")
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @groups("admin")
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255)
     * @groups("admin")
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=10)
     * @groups("admin")
     */
    private $phone_number;

    /**
     * @ORM\Column(type="string", length=120)
     * @groups("admin")
     */
  /**
     * @ORM\Column(type="string", length=35, nullable=true)
     * @groups("admin")
     */
    private $license;

    /**
     * @ORM\Column(type="boolean")
     * @groups("admin")
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Categorie", inversedBy="users")
     * @ORM\JoinColumn(nullable=false)
     * @groups("admin")
     */
    private $categorie;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Article", mappedBy="user")
     */
    private $article;
    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @groups("admin")
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * @groups("admin")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @groups("admin")
     */
    private $password;

    public function __construct()
    {
        $this->article = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

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
    public function getLicense(): ?string
    {
        return $this->license;
    }

    public function setLicense(?string $license): self
    {
        $this->license = $license;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCategorie(): ?Categorie
    {
        return $this->categorie;
    }

    public function setCategorie(?Categorie $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }
    /**
     * @return Collection|Article[]
     */
    public function getArticle(): Collection
    {
        return $this->article;
    }

    public function addArticle(Article $article): self
    {
        if (!$this->article->contains($article)) {
            $this->article[] = $article;
            $article->setUser($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): self
    {
        if ($this->article->contains($article)) {
            $this->article->removeElement($article);
            // set the owning side to null (unless already changed)
            if ($article->getUser() === $this) {
                $article->setUser(null);
            }
        }

        return $this;
    }
    public function getBirthday(): ?\DateTimeInterface
    {
        return $this->birthday;
    }

    public function setBirthday(\DateTimeInterface $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }
}
